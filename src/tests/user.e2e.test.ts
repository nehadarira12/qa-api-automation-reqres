import { createUser, getUser, updateUser, deleteUser } from '../api/reqresClient';


// Interface for create/update responses (dynamic fields from ReqRes API)
interface CreatedUserResponse {
  id: string;
  name?: string;
  job?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Interface for the GET user response structure (static data on ReqRes)
interface SingleUserResponse {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}
// Main E2E test suite for ReqRes user operations
describe('User API E2E Flow (by Neha Kumari, Senior QA Automation Engineer)', () => {
  let createdUserId: string;

    // Test: Create a new user (with my name/title)
  it('Test case 1: creates a new user: Neha Kumari, Senior QA Automation Engineer', async () => {
    const response = await createUser({ name: 'Neha Kumari', job: 'Senior QA Automation Engineer' });
    const data = response.data as CreatedUserResponse;
    expect(response.status).toBe(201); //assertion to verify status code
    expect(data).toHaveProperty('id'); //assertion to verify id.
    createdUserId = data.id;
  });

  // Note: ReqRes.in does NOT persist created users.
  // To show GET/UPDATE/DELETE, use a static userId (e.g., 2)
  const staticUserId = 2;

  it('Test case 2: gets an existing static user', async () => {
    const response = await getUser(String(staticUserId));
    const data = response.data as SingleUserResponse;
    expect(response.status).toBe(200);
    expect(data.data.id).toBe(staticUserId);
    expect(data.data).toHaveProperty('email');
    expect(data.data).toHaveProperty('first_name');
  });

  it('Test case 3: updates an existing static user', async () => {
    const response = await updateUser(String(staticUserId), { name: 'Neha Kumari', job: 'Lead QA Automation Engineer' });
    expect(response.status).toBe(200);
    const data = response.data as CreatedUserResponse;
    expect(data.name).toBe('Neha Kumari');
    expect(data.job).toBe('Lead QA Automation Engineer');
  });

  it('Test case 4: deletes an existing static user', async () => {
    const response = await deleteUser(String(staticUserId));
    expect(response.status).toBe(204);
  });

  it('Test case 5: cannot retrieve a non-existent user', async () => {
    try {
      await getUser(String(9999)); // Used an ID that does not exist
      fail('Should not retrieve non-existent user');
    } catch (err: any) {
      expect([404, 401]).toContain(err.response.status);
    }
  });
});
