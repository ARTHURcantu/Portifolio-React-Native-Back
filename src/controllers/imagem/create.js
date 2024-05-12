const create = () => {
    try{
        console.log('jkhgeqwurwveqtcv')
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default create