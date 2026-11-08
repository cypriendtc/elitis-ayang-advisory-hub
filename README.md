# Elitis Ayang Advisory Hub

Créer un site vitrine pour le cqbinet ELITIS AYANG. ELITIS fait egalement dans le consulting et la formation

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://elitis-ayang-advisory-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/043d3d7f-3da0-4536-9349-967b499ce76f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Hotel and apartment partner applications

The `/partenaires` page accepts applications from hotels and apartments. Submissions are stored privately in the Supabase `partner_applications` table with a pending status; they are not published as listings automatically. Review each application and approve the partnership before presenting a property to clients. Apply `drizzle/migrations/0000_partner_applications.sql` to the connected Supabase project if it has not already been applied. The server submission function requires the existing Supabase service-role configuration.
