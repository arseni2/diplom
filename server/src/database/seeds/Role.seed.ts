// Role.seed.ts
import {PrismaClient} from '@prisma/client';

class RoleSeeder {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    private roles = [
        {id: 1, title: 'User'},
        {id: 2, title: 'Realtor'},
        {id: 3, title: 'Admin'},
    ];

    public async run() {
        try {
            console.log('🌱 Начинаем сидирование ролей...');

            for (const role of this.roles) {
                try {
                    await this.prisma.role.create({data: role});
                    console.log(`✅ Роль "${role.title}" создана`);
                } catch (error: any) {
                    if (error.code === 'P2002') { // Unique constraint failed
                        console.log(`⚠️  Роль "${role.title}" уже существует — пропускаем`);
                    } else {
                        throw error; // Если другая ошибка — пробрасываем
                    }
                }
            }

            console.log('✅ Сидирование ролей завершено!');
        } catch (error) {
            console.error('❌ Ошибка при сидировании ролей:', error);
            throw error;
        } finally {
            await this.prisma.$disconnect();
        }
    }
}

export const roleSeeder = new RoleSeeder();