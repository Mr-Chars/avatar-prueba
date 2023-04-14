import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import { getGroups, getMatches, getTeams } from '@/services/worlCupServices';
import { useRouter } from 'next/router';
import MainLayout from './../layouts/mainLayout';
import CardMatchSlim from './../components/cardMatchSlim';

export default function Home() {
  const defMatchInGroup = { A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [] }
  const [isLogin, setIsLogin] = useState(false);
  const [teams, setTeams] = useState([]);
  const [groups, setGroups] = useState([]);
  const [matches, setMatches] = useState([]);
  const [matchesInGroup, setMatchesInGroup] = useState(defMatchInGroup);
  const [matchsInR16, setMatchesInR16] = useState([]);
  const [matchsInQR, setMatchesInQR] = useState([]);
  const [matchsInSemi, setMatchesInSemi] = useState([]);
  const [matchsIn3RD, setMatchesIn3RD] = useState([]);
  const [matchsInFIN, setMatchesInFIN] = useState([]);
  const router = useRouter()
  const groupsKey = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

  useEffect(() => {
    getTeams().then((response) => {
      if (response.status && response.data.status === "success") {
        setIsLogin(true);
        setTeams(response.data.data);
      } else {
        localStorage.removeItem("token");
        router.push('/login')
      }
    });

    getGroups().then((response) => {
      if (response.status && response.data.status === "success") {
        setGroups(response.data.data);
      }
    });

    getMatches().then((response) => {
      if (response.status && response.data.status === "success") {
        setMatches(response.data.data);
        setMatchesInGroup(response.matchsInGroup);
        setMatchesInR16(response.matchsInR16);
        setMatchesInQR(response.matchsInQR);
        setMatchesInSemi(response.matchsInSemi);
        setMatchesIn3RD(response.matchsIn3RD);
        setMatchesInFIN(response.matchsInFIN);
      }
    });

  }, []);

  const gg = async () => {
    const dataToRequest = {
      "email": "aaronrose853@gmail.com",
      "password": "Abcde12345$"
    }

    const options = {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(dataToRequest)
    }

    // the purpose of this fetch is so that the actual fetch is run on the backend (via its own API Route (handleDraft)); otherwise CORS is triggered if fetch is run on the frontend
    const res = await fetch('/api/servicesWorld', options);
    const ddata = await res.json()
  }

  return (
    <div className={styles.container}>
      {isLogin ? (

        <MainLayout>
          <div className='row'>
            <h3>Tabla de equipos</h3>
            {groups.map((group: any) => {
              return (
                <div className='col-3' key={group._id}>
                  <span className='text1'>{group.group}</span>
                  <div className='row'>
                    {group?.teams.map((team: any) => {
                      return (
                        <div className='col-12' key={team.team_id}>
                          {team.name_en}
                          <img src={team.flag} className='imgType1' height="20" width="20" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className='row mt-4'>
            <h3 className='text2'>Primera fase de partidos</h3>
            {groupsKey.map((group: any) => {
              return (
                <div className='col-3' key={group._id}>
                  <span className='text1'>{group}</span>
                  {
                    (() => {
                      if (group === 'A')
                        return <div className='row'>
                          {matchesInGroup?.A.map((match: any) => {
                            return (
                              <div className='col-12' key={match._id}>
                                <CardMatchSlim match={match} />
                              </div>
                            );
                          })}
                        </div>
                      if (group === 'B')
                        return <div className='row'>
                          {matchesInGroup?.B.map((match: any) => {
                            return (
                              <div className='col-12' key={match._id}>
                                <CardMatchSlim match={match} />
                              </div>
                            );
                          })}
                        </div>
                      if (group === 'C')
                        return <div className='row'>
                          {matchesInGroup?.C.map((match: any) => {
                            return (
                              <div className='col-12' key={match._id}>
                                <CardMatchSlim match={match} />
                              </div>
                            );
                          })}
                        </div>
                      if (group === 'D')
                        return <div className='row'>
                          {matchesInGroup?.D.map((match: any) => {
                            return (
                              <div className='col-12' key={match._id}>
                                <CardMatchSlim match={match} />
                              </div>
                            );
                          })}
                        </div>
                      if (group === 'E')
                        return <div className='row'>
                          {matchesInGroup?.E.map((match: any) => {
                            return (
                              <div className='col-12' key={match._id}>
                                <CardMatchSlim match={match} />
                              </div>
                            );
                          })}
                        </div>
                      if (group === 'F')
                        return <div className='row'>
                          {matchesInGroup?.F.map((match: any) => {
                            return (
                              <div className='col-12' key={match._id}>
                                <CardMatchSlim match={match} />
                              </div>
                            );
                          })}
                        </div>
                      if (group === 'G')
                        return <div className='row'>
                          {matchesInGroup?.G.map((match: any) => {
                            return (
                              <div className='col-12' key={match._id}>
                                <CardMatchSlim match={match} />
                              </div>
                            );
                          })}
                        </div>
                      if (group === 'H')
                        return <div className='row'>
                          {matchesInGroup?.H.map((match: any) => {
                            return (
                              <div className='col-12' key={match._id}>
                                <CardMatchSlim match={match} />
                              </div>
                            );
                          })}
                        </div>
                    })()
                  }
                </div>
              );
            })}
          </div>
          <div className='row mt-4'>
            <h3 className='text2'>Octavos de final</h3>
            <div className='row'>
              {matchsInR16?.map((match: any) => {
                return (
                  <div className='col-12' key={match._id}>
                    <CardMatchSlim match={match} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='row mt-4'>
            <h3 className='text2'>Cuartos de final</h3>
            <div className='row'>
              {matchsInQR?.map((match: any) => {
                return (
                  <div className='col-12' key={match._id}>
                    <CardMatchSlim match={match} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='row mt-4'>
            <h3 className='text2'>Semifinal</h3>
            <div className='row'>
              {matchsInSemi?.map((match: any) => {
                return (
                  <div className='col-12' key={match._id}>
                    <CardMatchSlim match={match} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='row mt-4'>
            <h3 className='text2'>Por el tercer puesto</h3>
            <div className='row'>
              {matchsIn3RD?.map((match: any) => {
                return (
                  <div className='col-12' key={match._id}>
                    <CardMatchSlim match={match} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='row mt-4'>
            <h3 className='text2'>Final</h3>
            <div className='row'>
              {matchsInFIN?.map((match: any) => {
                return (
                  <div className='col-12' key={match._id}>
                    <CardMatchSlim match={match} />
                  </div>
                );
              })}
            </div>
          </div>
        </MainLayout>

      ) : (
        <></>
      )}

    </div>
  )
}
