import { fetchUsers } from '../utils/user-helper/helper';

// Mock fetch globally
global.fetch = jest.fn();

describe('fetchUsers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch users successfully', async () => {
    const mockUsers = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        maidenName: '',
        age: 30,
        gender: 'male',
        email: 'john@example.com',
        phone: '123-456-7890',
        username: 'johndoe',
        password: 'password',
        birthDate: '1993-01-01',
        image: 'image.jpg',
        bloodGroup: 'O+',
        height: 180,
        weight: 75,
        eyeColor: 'brown',
        hair: { color: 'brown', type: 'straight' },
        address: {
          address: '123 Main St',
          city: 'New York',
          state: 'NY',
          country: 'USA',
          postalCode: '12345',
          coordinates: { lat: 40.7128, lng: -74.006 },
          timezone: 'America/New_York',
        },
        university: 'NYU',
        bank: {
          cardNumber: '1234567890123456',
          cardType: 'Visa',
          currency: 'USD',
          iban: 'US12345678901234567890',
        },
        company: {
          department: 'Engineering',
          name: 'Tech Corp',
          title: 'Software Engineer',
          address: {
            address: '456 Tech St',
            city: 'San Francisco',
            state: 'CA',
            country: 'USA',
            postalCode: '94105',
            coordinates: { lat: 37.7749, lng: -122.4194 },
            timezone: 'America/Los_Angeles',
          },
        },
        ein: '12-3456789',
        ssn: '123-45-6789',
        userAgent: 'Mozilla/5.0',
        crypto: {
          coin: 'Bitcoin',
          wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
          network: 'Bitcoin',
        },
        role: 'admin',
      },
    ];

    const mockResponse = {
      users: mockUsers,
    };

    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    } as Response);

    const users = await fetchUsers();

    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/users');
    expect(users).toEqual(mockUsers);
  });

  it('should throw error when fetch fails', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(
      new Error('Network error')
    );

    await expect(fetchUsers()).rejects.toThrow('Failed to fetch users');
  });
});
