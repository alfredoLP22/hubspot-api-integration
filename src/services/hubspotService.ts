import axios from "axios";
import dotenv from "dotenv";
import { ContactData } from "../interfaces/contact.interface";

dotenv.config();

const hubspotAPI = axios.create({
  baseURL: `${process.env.HUBSPOT_API_URL}`,
  headers: {
    Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export const createContact = async (contactData: ContactData) => {
  const response = await hubspotAPI.post("", {
    contactData,
  });
  return response.data;
};

export const getContactById = async (contactId: string) => {
  const response = await hubspotAPI.get(`/${contactId}`);
  return response.data;
};

export const updateContact = async (
  contactId: string,
  contactData: ContactData
) => {
  const response = await hubspotAPI.patch(`/${contactId}`, {
    ...contactData,
  });
  return response.data;
};

export const searchContactByEmail = async (email: string) => {
  const response = await hubspotAPI.post("/search", {
    after: 0,
    filterGroups: [
      {
        filters: [
          {
            propertyName: "email",
            operator: "EQ",
            value: email,
          },
        ],
      },
    ],
    limit: 10,
    properties: ["firstname", "lastname", "email", "phone"],
    sorts: ["firstname"],
  });
  return response.data;
};

export const deleteContact = async (contactId: string) => {
  await hubspotAPI.delete(`/${contactId}`);
};
