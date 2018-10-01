// Cash Register

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var response = { status: "", change: [] };

    var cidAmt = cid.reduce( function (accumulator, current) {
        return accumulator + current[1];
    }, 0);

    console.log(cidAmt);

    if ( cidAmt < change ) {
        response.status = "INSUFFICIENT_FUNDS";
        return response;
    }

    else if ( cidAmt === change ) {
        response.status = "CLOSED";
        response.change = cid;
        return response;
    }

    else{
        cid = cid.reverse();
        let moneyTable = [];

        let amounts = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

        for(let i = 0; i < cid.length; i++){
            let item = {};
            item["name"] = cid[i][0];
            item["amount"] = amounts[i];
            item["totalAmount"] = cid[i][1];
            moneyTable.push(item);
        }

        for(let i = 0; i < moneyTable.length; i++){
            let ele = [];

            if(change >= moneyTable[i].amount && change > 0 && moneyTable[i].totalAmount > 0){
                ele.push(moneyTable[i].name);
                let money = Math.floor(change / moneyTable[i].amount) * moneyTable[i].amount;
                if(money > moneyTable[i].totalAmount){
                    money = moneyTable[i].totalAmount;
                }
                ele.push(money);
                change -= money;
                change = +change.toFixed(2);
                console.log(change);
                response.change.push(ele);

            }
            if(change === 0){
                break;
            }
        }
        console.log(change);
        if(change === 0){
            response.status = "OPEN";
        }
        else{
            response.status = "INSUFFICIENT_FUNDS";
            response.change =[];
        }
    }
    console.log(response.status);
    console.log(response.change);
    // Here is your change, ma'am.
    return response;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);