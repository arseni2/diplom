"use client"
import styles from "./ManageUsers.module.scss"
import {Input} from "@/shared/ui/input/ui/Input";
import {Avatar, DropdownMenu, Select, Text} from "@gravity-ui/uikit";
import {useState} from "react";
import {EllipsisVertical} from '@gravity-ui/icons';
import clsx from "clsx";
import {useGetUsersQuery} from "@/features/users/hooks/getUsers";
import {roleMap} from "@/features/users/utils/roleMap";
import {RoleEnum} from "@/features/users/enum/RoleEnum";
import {useDeleteUser} from "@/features/users/hooks/deleteUser";
import {useChangeUserRole} from "@/features/users/hooks/changeUserRole";
import {toaster} from "@gravity-ui/uikit/toaster-singleton";


export const ManageUsers = () => {
    const [search, setSearch] = useState("");
    const {data, typedError, refetch} = useGetUsersQuery()
    const {mutate: deleteUserMutation} = useDeleteUser()
    const {mutate: changeUserRole} = useChangeUserRole()

    const handleClickSetRole = async (userId: number, role: RoleEnum) => {
        await changeUserRole({
            variables: {id: userId, roleId: role},
            onError: (error) => {
                toaster.add({
                    name: "changeRoleError",
                    content: "недостаточно прав",
                    title: "Ошибка",
                    theme: "danger"
                })
            },
            onCompleted: () => {
                toaster.add({
                    name: "changeRoleSuccess",
                    content: "Роль успешно изменена",
                    title: "Успешно",
                    theme: "success"
                })
            },
        });
    }
    const handleClickUserDelete = async (id: string) => {
        await deleteUserMutation(
            {
                variables: {id: Number(id)},
                onCompleted: () => {
                    toaster.add({
                        name: "userDeleteSuccess",
                        content: "Пользователь успешно изменена",
                        title: "Успешно",
                        theme: "success"
                    })
                },
                onError: () => {
                    toaster.add({
                        name: "userDeleteError",
                        content: "недостаточно прав",
                        title: "Ошибка",
                        theme: "danger"
                    })
                }
            })

        refetch()
    }


    return (
        <div className={styles.container}>
            <div className={styles.filterBar}>
                <div className={styles.searchBox}>
                    <Input
                        placeholder="Поиск"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className={styles.sortBox}>
                    <Select
                        label="Сортировка"
                    >
                        <Select.Option value="name">По имени</Select.Option>
                        <Select.Option value="position">По должности</Select.Option>
                        <Select.Option value="status">По статусу</Select.Option>
                    </Select>
                </div>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th className={styles.th}>Имя</th>
                        <th className={styles.th}>Роль</th>
                        <th className={styles.th}>Кол-во домов</th>
                        <th className={styles.th}>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.users?.map((user) => (
                        <tr key={user.id} className={styles.tr}>
                            <td className={styles.td}>
                                <div className={styles.userInfo}>
                                    <Avatar text={user.firstname || ""} size="xl"/>
                                    <div className={styles.userText}>
                                        <Text variant="body-2">{user.lastname}</Text>
                                        <Text variant="caption-2" color="secondary">
                                            {user.email}
                                        </Text>
                                    </div>
                                </div>
                            </td>

                            <td className={styles.td}>
                                <Text variant="body-2">{roleMap.get(user?.role?.title || "")}</Text>
                            </td>

                            <td className={styles.td}>
                                <div className={styles.status}>
                                    <Text variant="body-2">{user?.houses?.length || 0}</Text>
                                </div>
                            </td>

                            <td className={styles.td}>
                                <DropdownMenu
                                    switcher={<EllipsisVertical/>}
                                >
                                    <div onClick={() => handleClickSetRole(Number(user.id), RoleEnum.Admin)}
                                         className={styles.dropdown_item}>
                                        <Text>Назначить админом</Text>
                                    </div>

                                    <div onClick={() => handleClickSetRole(Number(user.id), RoleEnum.Realtor)}
                                         className={styles.dropdown_item}>
                                        <Text>Назначить риэлтором</Text>
                                    </div>

                                    <div onClick={() => handleClickUserDelete(user.id)}
                                         className={clsx(styles.dropdown_item, styles.dropdown_item_del)}>
                                        <Text>Удалить</Text>
                                    </div>
                                </DropdownMenu>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};