import type { Request, Response } from 'express';
//
import { fetchUsers, transformUserData } from '../utils/user-helper/helper.js';
import { logger } from '../config/config.js';

export async function getUsers(_req: Request, res: Response) {
  try {
    const users = await fetchUsers();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    const transformedData = transformUserData(users);
    if (!transformedData || Object.keys(transformedData).length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }

    res.status(200).json(transformedData);
  } catch (error) {
    logger.error('Error in getUsers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
