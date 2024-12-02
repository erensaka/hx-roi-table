document.getElementById("calculate-btn").addEventListener("click", function () {
    const stoppageTime = Number(document.getElementById("stoppage-time").value);
    const profitLoss = Number(document.getElementById("profit-loss").value);
    const beltLength = Number(document.getElementById("belt-length").value);
    const beltPrice = Number(document.getElementById("belt-price").value);
    const repairCost = Number(document.getElementById("repair-cost").value);

    // Calculations
    const stoppageWithHX = stoppageTime * 0.3;
    const profitWithoutHX = stoppageTime * profitLoss;
    const profitWithHX = stoppageWithHX * profitLoss;

    const beltWithoutHX = beltLength * beltPrice;
    const beltWithHX = (beltLength * 0.1) * beltPrice;

    const repairWithoutHX = stoppageTime * repairCost;
    const repairWithHX = stoppageWithHX * repairCost;

    const totalWithoutHX = profitWithoutHX + beltWithoutHX + repairWithoutHX;
    const totalWithHX = profitWithHX + beltWithHX + repairWithHX;

    const savings = totalWithoutHX - totalWithHX;

    // Update table (rounding values)
    document.getElementById("stoppage-without").innerText = Math.round(stoppageTime);
    document.getElementById("stoppage-with").innerText = Math.round(stoppageWithHX);

    document.getElementById("profit-without").innerText = Math.round(profitWithoutHX);
    document.getElementById("profit-with").innerText = Math.round(profitWithHX);

    document.getElementById("belt-without").innerText = Math.round(beltWithoutHX);
    document.getElementById("belt-with").innerText = Math.round(beltWithHX);

    document.getElementById("repair-without").innerText = Math.round(repairWithoutHX);
    document.getElementById("repair-with").innerText = Math.round(repairWithHX);

    document.getElementById("total-without").innerText = Math.round(totalWithoutHX);
    document.getElementById("total-with").innerText = Math.round(totalWithHX);

    document.getElementById("savings").innerText = Math.round(savings);
});
