'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
const Biography = () => {
  return (
    <section className="h-[100vh] bg-slate-500 xl:h-[650px] max-w-8xl mx-auto px-4 sm:px-6" id="biography">
      
    <div className="container mx-auto h-full  flex items-center justify-center xl:justify-start">
         
      <div className='mt-16'>
       
        <h1 className="uppercase text-[2.5rem]  font-bold ">Biografia</h1>
        <hr className="w-[1263px] h-[3.5px] bg-white mb-5"  />
         <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
         >
            <p className="text-xl w-[97%] text-gray-200 text-justify mb-8">
              A SleepWalkerS iniciou-se em 2008, com o Guitarrista Artur SA, através de músicos encontrados pelo site “TÔ SEM BANDA”, partindo-se da premissa de formar uma banda no estilo DARK/GOTHIC METAL, incluindo vocal feminino, gutural e teclados sinfônicos. Assim após alguns meses de busca a banda composta por Mari Li (Vocal) Artur SA (Guitarra) e Marcos Lopes (Guitarra) iniciaram a composição de músicas. Com quase 4 anos de existência e a crescente dificuldade de firmar o line-up a banda encerrou-se em 2011, sendo que nessa época era conhecida como “ BLACK SUNRISE” em homenagem a celebre música da banda alemã Kreator. Em 2013 Artur SA retornou a banda, com o nome corrigido para SleepWalkerS, junto com seu primo Eduardo Souza – Bateria ( 2013 – 2017) e novamente com a vocalista Mari Lima, a banda fechou o set list de 08 músicas e com novos integrantes Leandro Miguel (Baixo) e Rafael “BLADE” Dantas no teclado, a banda começou a fazer shows pelas casas noturnas de SP, como Inferno, Hangar, Manifesto e outras. Após vários shows e troca de integrantes (baixo, voz, bateria e teclado) a banda solidificou seus trabalhos com os exímios músicos: Matheus Ulhoa (guitarra solo, ex Opus Hell), Felipe Ulhoa (baixo), Allan Azevedo (bateria), e a vocal Letícia Duarte. A banda entra em estúdio no final de 2018 para sacramentar seu nome no meio underground do metal nacional com o lançamento do primeiro debut, intitulado de HYPNOS, que foi lançado em 2019, junto com o Lyric vídeo RISE IN THE FIRE e o clip SUBCONCIOUS CRUELTY, com a marca de mais de 4.000 visualizações e com mais de 12.000 seguidores. Antes de iniciar seus shows em divulgação ao novo material, a o mundo foi surpreendido pela pandemia. Com isso a banda resolveu voltar aos estúdios e compor novas músicas. A banda lançou em setembro / 2023, o single “ The Fallen Sun”, ainda em desenvolvimento, programado para 2024, mais quatro músicas estão em desenvolvimento, sendo dois covers e depois o 2ª CD denominado THANATHOS.
              </p>
         </motion.div>
    
           
       </div>

      
    </div>
  </section>



  
  )
}

export default Biography