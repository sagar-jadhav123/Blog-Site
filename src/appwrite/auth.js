import config from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAcoount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
    } catch (error) {
      console.error("An error occurred:", error);
    }

    if (userAcoount) {
      //Something is remain
    } else {
      return userAccount;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("An error occurred:", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}

const authService = new AuthService();

export default authService;
