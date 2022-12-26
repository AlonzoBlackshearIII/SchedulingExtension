function storeEvent() 
{
    var evName = document.getElementById("eventName");
    var evDate = document.getElementById("eventDate");
    let newEvent = new userEvent(evName.value, evDate.value);
    newEvent.show();
    alert(evName.value);
}
class userEvent
{
    constructor(name, date)
    {
        this.name = name;
        this.duedate = date;
    }

    show()
    {
        alert(this.name + " " + this.duedate);
    }
}
