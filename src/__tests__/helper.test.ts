import { transformUserData } from '../utils/user-helper/helper';
import type { User } from '../types/users';

describe('transformUserData', () => {
  it('should transform user data correctly', () => {
    const users: User[] = [
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
          coordinates: { lat: 40.7128, lng: -74.0060 },
          timezone: 'America/New_York'
        },
        university: 'NYU',
        bank: {
          cardNumber: '1234567890123456',
          cardType: 'Visa',
          currency: 'USD',
          iban: 'US12345678901234567890'
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
            timezone: 'America/Los_Angeles'
          }
        },
        ein: '12-3456789',
        ssn: '123-45-6789',
        userAgent: 'Mozilla/5.0',
        crypto: {
          coin: 'Bitcoin',
          wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
          network: 'Bitcoin'
        },
        role: 'admin'
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        maidenName: '',
        age: 40,
        gender: 'female',
        email: 'jane@example.com',
        phone: '987-654-3210',
        username: 'janesmith',
        password: 'password',
        birthDate: '1983-01-01',
        image: 'image2.jpg',
        bloodGroup: 'A+',
        height: 165,
        weight: 60,
        eyeColor: 'blue',
        hair: { color: 'blonde', type: 'curly' },
        address: {
          address: '789 Oak Ave',
          city: 'Los Angeles',
          state: 'CA',
          country: 'USA',
          postalCode: '54321',
          coordinates: { lat: 34.0522, lng: -118.2437 },
          timezone: 'America/Los_Angeles'
        },
        university: 'UCLA',
        bank: {
          cardNumber: '9876543210987654',
          cardType: 'MasterCard',
          currency: 'USD',
          iban: 'US98765432109876543210'
        },
        company: {
          department: 'Engineering',
          name: 'Tech Corp',
          title: 'Senior Engineer',
          address: {
            address: '456 Tech St',
            city: 'San Francisco',
            state: 'CA',
            country: 'USA',
            postalCode: '94105',
            coordinates: { lat: 37.7749, lng: -122.4194 },
            timezone: 'America/Los_Angeles'
          }
        },
        ein: '98-7654321',
        ssn: '987-65-4321',
        userAgent: 'Mozilla/5.0',
        crypto: {
          coin: 'Ethereum',
          wallet: '0x742d35Cc6634C0532925a3b8D39dF7A01C9FC1bF',
          network: 'Ethereum'
        },
        role: 'user'
      }
    ];

    const transformed = transformUserData(users);

    expect(transformed['Engineering'].male).toBe(1);
    expect(transformed['Engineering'].female).toBe(1);
    expect(transformed['Engineering'].ageRange).toBe('30-40');
    expect(transformed['Engineering'].hair['brown']).toBe(1);
    expect(transformed['Engineering'].hair['blonde']).toBe(1);
    expect(transformed['Engineering'].addressUser['JohnDoe']).toBe('12345');
    expect(transformed['Engineering'].addressUser['JaneSmith']).toBe('54321');
  });
});

