function Sunday() {
     count = 0;

    for (i = 2000; i <= 2050; i++) {
         date = new Date(i, 7, 14); // August is month 7 (zero-based index)
        
        if (date.getDay() == 0) { // 0 means Sunday
            document.write(`14 August <b>${i}</b> is on a Sunday <br>`);
            count++;
        }
    }

    document.write(`Total Sundays on 14th August from <b>2000</b> to <b>2050</b>: <b>${count}</b>`);
}

// Sunday()
