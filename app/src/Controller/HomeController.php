<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/debut-de-nos-activites', name: 'debut_activites')]
    public function debutActivites(): Response
    {
        return $this->render('home/debut_activites.html.twig');
    }

    #[Route('/sur-la-route-de-l-ecole-la-destinee', name: 'route_destine')]
    public function routeDestine(): Response
    {
        return $this->render('home/route_destine.html.twig');
    }
}
