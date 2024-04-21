import pool from "../utils/db";

export interface User {
  id: number;
  username: string;
  password: string;
}

export const findUserByUsername = async (
  username: string
): Promise<User | null> => {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return result.rows[0] || null;
};

export const createUser = async (
  username: string,
  hashedPassword: string
): Promise<void> => {
  await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
    username,
    hashedPassword,
  ]);
};
