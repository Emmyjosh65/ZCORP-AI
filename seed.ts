import { seedPremiumCodes } from "../web/lib/premium";
import { db } from "../web/lib/db";

async function main() {
  await seedPremiumCodes();
  const username = process.env.ADMIN_BOOTSTRAP_USERNAME;
  const password = process.env.ADMIN_BOOTSTRAP_PASSWORD;
  if (username && password) {
    const bcrypt = await import("bcryptjs");
    const hash = await bcrypt.hash(password, 12);
    await db.user.upsert({
      where: { username },
      update: { passwordHash: hash, isAdmin: true },
      create: { username, passwordHash: hash, isAdmin: true, policyAcceptedAt: new Date() }
    });
  }
}
main().finally(() => db.$disconnect());
