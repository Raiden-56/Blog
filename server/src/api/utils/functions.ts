import * as bcrypt from 'bcrypt'; 

const comparePasswords = async ({ hashedPassword, password }: { hashedPassword: string, password: string}): Promise<boolean> => {
    return await bcrypt.compareSync(password, hashedPassword);
}

const hashPassword = async ({ password }: { password: string }): Promise<string> => {
    return await bcrypt.hashSync(password, 10);
}

export {
    hashPassword,
    comparePasswords
}