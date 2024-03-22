# Back-end Developer Test HIGH

## User Model

Build a RESTful API that can `create/read/update/delete`

It is necessary to implement a service with an API for making a person an
appointment with a doctor, and a reminder 2 hours before the appointment

In the database, you can make the following collections
### Users:
```
{
    id: 'uid',
    phone: '+7 926 578 85 14',
    name: 'Wasya',
    ...anything
}
```
### Doctors:
```
{
    id: 'uid',
    name: 'Bolodia',
    spec: 'Therapist',
    // Free slots for writing (you can make an array of objects, or just DateTime)
    slots: ['date_time', 'date_time'],
    ...anything
}
```

In fact, we need an API method to record a person for an appointment, 
we give it to the input

1. User ID
2. Doctor's ID
3. The slot we want to sign up for

```
{
    user_id: 'askd90pajsdpojas',
    doctor_id: 'a987astgydioaushd9a0sdhy',
    slot: 'date_time',
    ...anything
}
```

Requirements
- Only one person can sign up for one slot
- If you try to sign up for an impossible time, an error will be returned


## Alert service
You also need a service that will notify the user:
- 1 day before admission
- 2 hours before admission

Let the service itself simply log messages to a .log file:
```
{{ current_date}} | Hi {{ user.name }}! We remind you that you have an appointment with {{ doctor.spec }} tomorrow at {{ slot.time }}!
{{ current_date}} | Hi {{ user.name }}! Get to {{ doctor.spec }} at {{ slot.time }} in 2 hours!
```

If you need something else for the implementation
(methods / collections / ... anything), 
then add it, this is more likely not a requirement, but a wish

### Functionality

- The API should follow typical RESTful API design pattern.
- The data should be saved in the DB.
- Provide proper API documentation.
- Proper error handling should be used.
- Bonus: Use background process(queue) to schedule reminder tasks
