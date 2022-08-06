import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {getStagiaires,reset} from '../features/stagiaire/stagiaireSlice'

export const Stagiaires = () => {
    const dispatch = useDispatch();
    const {stagiaires } = useSelector((state)=>state.stagiaire)
    let counter = 0;

    useEffect(() => {
        dispatch(getStagiaires());
        return () => {
            dispatch(reset())
          }
    },[dispatch])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mt-4">




        <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">




      <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cin</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sexe</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tel</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Option</th>        
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {
        stagiaires.map((stagiaire)=>{
          counter++
          return(
            <tr key={stagiaire._id}>
              <td className="px-6 py-4 whitespace-nowrap">{counter}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.cin}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.nom}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.prenom}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.sexe}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.tel}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.option}</td>
            </tr>
          )
        })
      }
      
    </tbody>
  </table>







</div></div></div></div>




  </div></main></div>
  )
}
