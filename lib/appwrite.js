import { Account, Avatars, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.shm.aora",
  projectId: "661ea6a39e6f7cdd29f1",
  databaseId: "661ea7acb00e212f2bb1",
  userCollectionId: "661ea7ca74c616c0907b",
  videoColectionId: "661ea7e916e209b73a60",
  storageId: "661eabd646136348b80b",
};

// Init your react-native SDK
const client = new Client();
const avatars = new Avatars(client);

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = async (email,password,username)=>{
    try {
        const newAccount = await account.create(
           ID.unique(),
           email,
           password,
            username
        )
        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn();
    
    }  
    catch (error) { 
        console.error(error); 
        throw new Error(error);
    }
}

export async function signIn(email,password){
    try {
        const session = await account.createEmailSession(email,password);
        if(!session) throw Error;
    } catch (error) {
        throw new Error(error);
    }
}

