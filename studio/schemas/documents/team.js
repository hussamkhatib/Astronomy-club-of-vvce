
export default {
    name:  'team',
    type: 'document',
    title: 'Team',
    fields : [
        {
        name: 'title',
        type: 'string',
        title: 'Title'
    } 
    ,{
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
            source: 'title',
            maxLength: 96
        }
    }
    ] 
}