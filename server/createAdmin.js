const bcrypt = require("bcryptjs");
const prisma = require("./prismaClient");

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  await prisma.admin.create({
    data: {
      email: "admin@gmail.com",
      password: hashedPassword,
    },
  });

  console.log("Admin created successfully!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });