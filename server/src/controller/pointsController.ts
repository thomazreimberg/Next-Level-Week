import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async index(request: Request, response: Response) {
    const { city, uf, itens } = request.query;

    const parsedItems = String(itens)
      .split(',')
      .map(item => Number(item.trim()));

    const points = await knex('tb_points')
      .join('tb_point_itens', 'tb_points.id', '=', 'tb_point_itens.point_id')
      .whereIn('tb_point_itens.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('tb_points.*');

    return response.json(points);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex('tb_points').where('id', id).first();

    if (!point) {
      return response.status(400).json({ message: 'Point not found!' });
    }

    const items = await knex('tb_itens')
      .join('tb_point_itens', 'tb_itens.id', '=', 'tb_point_itens.item_id')
      .where('tb_point_itens.point_id', id)
      .select('tb_itens.title');

    return response.json({ point, items });
  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const trx = await knex.transaction();

    const point = {
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    };

    const insertedIds = await trx('tb_points').insert(point);

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });

    await trx('tb_point_itens').insert(pointItems);

    await trx.commit();

    return response.json({ id: point_id, ...point });
  }
}

export default PointsController;
