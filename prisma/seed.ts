import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Define roles to create
  const roles = ['Admin', 'Editor', 'Reader', 'Customer'];

  // Create or update roles
  for (const roleName of roles) {
    await prisma.roles.upsert({
      where: { roleName },
      update: {},
      create: { roleName },
    });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash('redx1998', 10);

  // Fetch Admin role ID
  const adminRole = await prisma.roles.findUnique({
    where: { roleName: 'Admin' },
  });

  // Create or update the admin user
  if (adminRole) {
    await prisma.users.upsert({
      where: { email: 'suporte@gmail.com' }, // Use email as it's unique
      update: {},
      create: {
        email: 'suporte@gmail.com',
        name: 'Redxp',
        avatar: '',
        password: hashedPassword,
        roleId: adminRole.id, // Link to the Admin role
      },
    });
  }

  // Fetch Customer role ID
  const customerRole = await prisma.roles.findUnique({
    where: { roleName: 'Customer' },
  });

  // Create a customer
  if (customerRole) {
    await prisma.customers.create({
      data: {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        avatar: '',
        password: await bcrypt.hash('customerpass', 10),
        roleId: customerRole.id, // Link to the Customer role
      },
    });
  }

  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
