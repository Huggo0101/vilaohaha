import {  con  } from './connection.js'

export async function inserirVilao(vilao){
    const comando= 'insert into tb_vilao(nm_vilao,ds_maldades,bt_super_poder) values (?,?,?)';

    const [resposta] = await con.query(comando, [vilao.nome, vilao.maldade,vilao.poder])
    vilao.id = resposta.insertId;
    return vilao
}

export async function listarVilao (){
    const comando =
    'select id_vilao    id'
    '       nm_vilao    nome'
    'from   tb_vilao';

    const [resposta]= await con.query(comando);
    return resposta;
            
}