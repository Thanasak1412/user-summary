import type {
  User,
  UserResponse,
  TransformedData,
  DeptSummary,
} from '../../types/users';

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const data = (await response.json()) as UserResponse;

    return data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
}

export function transformUserData(users: User[]): TransformedData {
  const result: TransformedData = {};

  const deptAgeMap: Record<string, number[]> = {};

  for (const user of users) {
    const { department } = user.company;

    if (!result[department]) {
      result[department] = {
        male: 0,
        female: 0,
        ageRange: '',
        hair: {},
        addressUser: {},
      };
      deptAgeMap[department] = [];
    }

    deptAgeMap[department].push(user.age);

    const summary = result[department];

    // Count genders
    countGender(user, summary);

    // Count hair colors
    countHairColor(user, summary);

    // Map address user
    mapAddressUser(user, summary);
  }

  //   Calculate age range for each department
  calculateAgeRange(deptAgeMap, result);

  return result;
}

function countGender(user: User, summary: DeptSummary): void {
  if (user.gender === 'male') {
    summary.male++;
  } else if (user.gender === 'female') {
    summary.female++;
  }
}

function countHairColor(user: User, summary: DeptSummary): void {
  const hairColor = user.hair.color;
  summary.hair[hairColor] = (summary.hair[hairColor] || 0) + 1;
}

function mapAddressUser(user: User, summary: DeptSummary): void {
  const nameKey = `${user.firstName}${user.lastName}`;
  summary.addressUser[nameKey] = user.address.postalCode;
}

function calculateAgeRange(
  deptAgeMap: Record<string, number[]>,
  summary: TransformedData
): void {
  for (const dept in deptAgeMap) {
    const ages = deptAgeMap[dept];

    const minAge = Math.min(...ages);
    const maxAge = Math.max(...ages);

    summary[dept].ageRange = `${minAge}-${maxAge}`;
  }
}
