import { jwtVerify, generateSecret, SignJWT } from '../imports.ts';

class JwtToken {
    JWK: Object | null;
    payload: any;
    JWT: any;

    constructor(){}

    generateToken(_payload: any){
        this.payload = typeof _payload === 'string' ? JSON.parse(_payload) : _payload
        return this.generateJwtToken();
    }

    async secretKeyGeneration(){
        return await generateSecret('HS512');
    }

    async generateJwtToken(){
        this.JWK = await this.secretKeyGeneration()
        let _Jwt = await new SignJWT(this.payload)
        .setProtectedHeader({ alg: 'HS512', typ: "JWT" })
        .setIssuer('Deno')
        .setAudience('Angular')
        .setExpirationTime('2h')
        .sign(this.JWK)
        this.JWT = _Jwt;
        return this.JWT
    }

    getJwtToken(){
        return this.JWT
    }

    async isAuthorized(_jwt: any): boolean {
        try {
            const { header, payload } = await jwtVerify(_jwt, this.JWK)
            console.log("header and payload from verified JWT are", header, payload)
            return true
        }
        catch (error: any){
            // return error
            console.log("Error", error)
            return false
        }
    }
}

export const jwt = new JwtToken();