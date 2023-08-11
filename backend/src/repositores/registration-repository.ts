import prisma from "../config/database";

async function listAll() {
  return prisma.registration.findMany({});
}

async function create(registration: any) {
  await prisma.registration.create({ data: registration });
}

async function findByEmail(email: string) {
  return prisma.registration.findUnique({
    where: { email: email },
  });
}

async function destroy(email: string) {
  await prisma.registration.delete({
    where: { email: email },
  });
}

export default { listAll, create, findByEmail, destroy };
