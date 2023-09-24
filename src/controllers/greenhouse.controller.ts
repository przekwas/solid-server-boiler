import { Request, Response } from 'express';
import { CONSTANTS } from '../config/constants';
import axios from 'axios';

export const greenHouseHireAppliation = async (req: Request, res: Response) => {
  try {
    const resp = axios({
      method: 'post',
      url: CONSTANTS.greenhouse + "applications/" + req.params.id + "/hire",
      headers: {
        // "On-Behalf-Of: {greenhouse user ID}"
        Authorization: "Basic MGQwMzFkODIyN2VhZmE2MWRjMzc1YTZjMmUwNjdlMjQ6"
      }
    });
    return resp;
  } catch (error) {
    throw new Error(error);
  }
};