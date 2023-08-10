import prisma from "../config/database";

async function listAll() {
  return await prisma.registration.findMany({});
}

async function create(registration: any) {
  await prisma.registration.create({ data: registration });
}

export default { listAll, create };
