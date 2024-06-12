class kidney {

    constructor(id,health){
        this.id = id;
        this.health = health;
    }

    getId(){
        return this.id;
    }

    getKidneyVital(){
        d = {"id":this.id,
            "health":this.health}
        return d;
    }

    getHealth(){
        return this.health;
    }

    setId(newid){
        this.id = newid;
    }

    setHealth(newhealth){
        this.health = newhealth;
    }


}

module.exports = {kidney}