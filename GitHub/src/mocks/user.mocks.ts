import { User} from '../models/user.interface';

const userlist: User[] = [
    {
        name: 'JosephCasal',
        company: 'PWH',
        location: 'Florida, US',
        bio: 'I code all night!!!',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: 'jcasa@fiu.edu'
    },
    {
        name: 'JohnDoe',
        company: 'Doe and Co.',
        location: 'London, UK',
        bio: 'I love ionic!',
        avatar_url: 'http://i.imgur.com/TzWcihb.png',
        email: 'john@doe.com'
    }
];

export const USER_LIST = userlist;