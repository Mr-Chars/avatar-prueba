import { NextApiRequest, NextApiResponse } from "next";
import { URL_MAIN } from './../../contants';
type Data = {
    name: string;
    data?: any;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.body.service === 'getTeams') {
        const teams = await getTeams(req.body)
        return res.end(JSON.stringify(teams));
    }
    if (req.body.service === 'getGroups') {
        const teams = await getGroups(req.body)
        return res.end(JSON.stringify(teams));
    }
    if (req.body.service === 'login') {
        const response = await login(req.body)
        return res.end(JSON.stringify(response));
    }
    if (req.body.service === 'getMatches') {
        const response = await getMatches(req.body)
        return res.end(JSON.stringify(response));
    }
    return res.end(JSON.stringify({ status: 'ddata' }));

}

const login = async (request: any) => {
    const dataToRequest = {
        email: request.email,
        password: request.password
    }

    try {

        const data = await fetch(URL_MAIN + 'user/login', {
            method: "POST",
            body: JSON.stringify(dataToRequest),
            headers: { "Content-type": "application/json" }
        });
        return { status: true, data: await data.json() }
    } catch (error) {
        return { status: false, error }
    }
}

const getGroups = async (request: any) => {
    try {
        const data = await fetch(URL_MAIN + 'standings', {
            headers: { "Content-type": "application/json", Authorization: 'Bearer ' + request.tokenStorage }
        });
        return { status: true, data: await data.json() }
    } catch (error) {
        return { status: false, error }
    }
}

const getTeams = async (request: any) => {
    try {
        const data = await fetch(URL_MAIN + 'team', {
            headers: { "Content-type": "application/json", Authorization: 'Bearer ' + request.tokenStorage }
        });
        return { status: true, data: await data.json() }
    } catch (error) {
        return { status: false, error }
    }
}

const getMatches = async (request: any) => {
    try {
        const data = await fetch(URL_MAIN + 'match', {
            headers: { "Content-type": "application/json", Authorization: 'Bearer ' + request.tokenStorage }
        });
        return { status: true, data: await data.json() }
    } catch (error) {
        return { status: false, error }
    }
}

export default handler;