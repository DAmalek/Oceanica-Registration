import prisma from "../config/database";

async function listAll() {
  return await prisma.registration.findMany({});
}

export default { listAll };
