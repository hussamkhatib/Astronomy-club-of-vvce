export default {
  name : 'event',
  type: 'document',
  title: 'EventDate',
    fields: [  
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        }
        ,
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'Describe your event'
        }
        ,
        {
            title: 'Event date',
            name: 'eventDate',
            type: 'date',
            options: {
            dateFormat: 'YYYY-MM-DD',
            calendarTodayLabel: 'Today'
        }
    } 
    ]
}
