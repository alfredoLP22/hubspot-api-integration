import e, { Request, Response } from "express";
import * as hubspotService from "../services/hubspotService";

export const createContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contact = await hubspotService.createContact(req.body);
    res.status(201).json(contact);
  } catch (error: any) {
    if (error.status === 404) {
      res.status(error.status).json({ error: error.response.statusText });
    } else {
      res.status(error.status).json({ error: error.response.data.message });
    }
  }
};

export const getContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contact = await hubspotService.getContactById(req.params.id);
    res.status(200).json(contact);
  } catch (error: any) {
    if (error.status === 404) {
      res.status(error.status).json({ error: error.response.statusText });
    } else {
      res.status(error.status).json({ error: error.response.data.message });
    }
  }
};

export const updateContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contact = await hubspotService.updateContact(req.params.id, req.body);
    res.status(200).json(contact);
  } catch (error: any) {
    if (error.status === 404) {
      res.status(error.status).json({ error: error.response.statusText });
    } else {
      res.status(error.status).json({ error: error.response.data.message });
    }
  }
};

export const searchContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  const email = req.query.email as string;
  try {
    const contact = await hubspotService.searchContactByEmail(email);
    res.status(200).json(contact);
  } catch (error: any) {
    if (error.status === 404) {
      res.status(error.status).json({ error: error.response.statusText });
    } else {
      res.status(error.status).json({ error: error.response.data.message });
    }
  }
};

export const deleteContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await hubspotService.deleteContact(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    if (error.status === 404) {
      res.status(error.status).json({ error: error.response.statusText });
    } else {
      res.status(error.status).json({ error: error.response.data.message });
    }
  }
};
