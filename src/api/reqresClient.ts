import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const BASE_URL = 'https://reqres.in/api'; // Base URL for the ReqRes API
const API_KEY = process.env.REQRES_API_KEY as string; // API key loaded from .env

// Created a reusable Axios instance with required headers
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': API_KEY,              
    'Content-Type': 'application/json'
  }
});

// Interface for user payloads (used in create and update operations)
export interface UserPayload {
  name: string;
  job: string;
}

// Create a new user
export const createUser = (data: UserPayload) => axiosInstance.post('/users', data);

// Get a user by ID
export const getUser = (id: string) => axiosInstance.get(`/users/${id}`);

// Update a user by ID
export const updateUser = (id: string, data: UserPayload) => axiosInstance.put(`/users/${id}`, data);

// Delete a user by ID
export const deleteUser = (id: string) => axiosInstance.delete(`/users/${id}`);
