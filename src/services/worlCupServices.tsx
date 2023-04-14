
export async function getTeams() {
    return await baseRest("getTeams");
}

export async function baseRest(serviceName: String, returnInJson = true) {
    const dataToRequest = {
        service: serviceName,
        tokenStorage: localStorage.getItem('token')
    }
    const options = {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(dataToRequest)
    }
    const res = await fetch('/api/servicesWorld', options);
    if (returnInJson) {
        return await res.json();
    }
    return await res;
}

export async function getGroups() {
    return await baseRest("getGroups");
}

export async function getMatches() {
    const response = await baseRest("getMatches");
    let InGroup = response.data.data.filter((res: any) => res.type.indexOf('group') !== -1);
    let InGroupA = InGroup.filter((res: any) => res.group.indexOf('A') !== -1);
    let InGroupB = InGroup.filter((res: any) => res.group.indexOf('B') !== -1);
    let InGroupC = InGroup.filter((res: any) => res.group.indexOf('C') !== -1);
    let InGroupD = InGroup.filter((res: any) => res.group.indexOf('D') !== -1);
    let InGroupE = InGroup.filter((res: any) => res.group.indexOf('E') !== -1);
    let InGroupF = InGroup.filter((res: any) => res.group.indexOf('F') !== -1);
    let InGroupG = InGroup.filter((res: any) => res.group.indexOf('G') !== -1);
    let InGroupH = InGroup.filter((res: any) => res.group.indexOf('H') !== -1);


    let R16 = response.data.data.filter((res: any) => res.type.indexOf('R16') !== -1);
    let QR = response.data.data.filter((res: any) => res.type.indexOf('QR') !== -1);
    let semi = response.data.data.filter((res: any) => res.type.indexOf('semi') !== -1);
    let t3RD = response.data.data.filter((res: any) => res.type.indexOf('3RD') !== -1);
    let FIN = response.data.data.filter((res: any) => res.type.indexOf('FIN') !== -1);

    return {
        ...response,
        matchsInGroup: {
            total: InGroup,
            A: InGroupA,
            B: InGroupB,
            C: InGroupC,
            D: InGroupD,
            E: InGroupE,
            F: InGroupF,
            G: InGroupG,
            H: InGroupH,
        },
        matchsInR16: R16,
        matchsInQR: QR,
        matchsInSemi: semi,
        matchsIn3RD: t3RD,
        matchsInFIN: FIN,
    };
}

export async function login(dataToRequest: any) {
    dataToRequest.service = "login"
    dataToRequest.tokenStorage = localStorage.getItem('token')
    const options = {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(dataToRequest)
    }

    // the purpose of this fetch is so that the actual fetch is run on the backend (via its own API Route (handleDraft)); otherwise CORS is triggered if fetch is run on the frontend
    const res = await fetch('/api/servicesWorld', options);
    const ddata = await res.json();
    return ddata
}