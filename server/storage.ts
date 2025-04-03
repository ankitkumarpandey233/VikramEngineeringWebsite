import { inquiries, type Inquiry, type InsertInquiry, users, type User, type InsertUser } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiriesMap: Map<number, Inquiry>;
  private userId: number;
  private inquiryId: number;

  constructor() {
    this.users = new Map();
    this.inquiriesMap = new Map();
    this.userId = 1;
    this.inquiryId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.inquiryId++;
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date().toISOString() 
    };
    this.inquiriesMap.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiriesMap.values());
  }
}

export const storage = new MemStorage();
