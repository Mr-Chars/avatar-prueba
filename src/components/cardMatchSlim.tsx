import React, { useEffect, useState } from "react";

const CardMatchSlim = ({ match }: any) => {

    return (
        <>
            <div className='w-100'>
                <img src={match.home_flag} height="20" width="20" /> {match.home_team_en} ({match.home_score})
                -
                <img src={match.away_flag} height="20" width="20" /> {match.away_team_en} ({match.away_score})
            </div>
        </>
    )


}

export default CardMatchSlim;