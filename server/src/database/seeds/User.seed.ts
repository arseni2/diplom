// User.seed.ts
import {PrismaClient} from '@prisma/client';

class UserSeeder {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    private users = [
        {
            id: 1,
            roleId: 1,
            email: "user@user.com",
            password: "user@user.com",
            avatarId: null,
            createdAt: new Date()
        },
        {
            id: 2,
            roleId: 2,
            email: "realtor@realtor.com",
            password: "realtor@realtor.com",
            avatarId: null,
            createdAt: new Date()
        },
        {
            id: 3,
            roleId: 3,
            email: "admin@admin.com",
            password: "admin@admin.com",
            avatarId: null,
            createdAt: new Date()
        },
    ];

    public async run() {
        try {
            console.log('🌱 Начинаем сидирование пользователей...');

            for (const user of this.users) {
                try {
                    await this.prisma.user.create({data: user});
                    console.log(`✅ Пользователь "${user.email}" создан`);
                } catch (error: any) {
                    if (error.code === 'P2002') { // Уникальное ограничение (email или id)
                        console.log(`⚠️  Пользователь "${user.email}" уже существует — пропускаем`);
                    } else {
                        throw error;
                    }
                }
            }

            console.log('✅ Сидирование пользователей завершено!');
        } catch (error) {
            console.error('❌ Ошибка при сидировании пользователей:', error);
            throw error;
        } finally {
            await this.prisma.$disconnect();
        }
    }
}

export const userSeeder = new UserSeeder();