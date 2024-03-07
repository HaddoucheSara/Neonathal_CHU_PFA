<?php

namespace App\Repository;

use App\Entity\Matient;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Matient>
 *
 * @method Matient|null find($id, $lockMode = null, $lockVersion = null)
 * @method Matient|null findOneBy(array $criteria, array $orderBy = null)
 * @method Matient[]    findAll()
 * @method Matient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MatientRepository extends ServiceEntityRepository
{   // Les repositories Doctrine sont utilisés pour interagir avec la base de données et effectuer des opérations de requête sur les entités
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Matient::class);
    }

    public function save(Matient $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);
        //persist($entity) : Cela dit à Doctrine (le gestionnaire de base de données) de suivre et de gérer l'entité spécifiée  Cela ne l'enregistre pas immédiatement en base de données, mais le prépare pour cela
        if ($flush) {
            $this->getEntityManager()->flush();
        }
        //$flush à true, cela signifie : "D'accord, va maintenant et enregistre réellement cette entité en base de données."
    }

    public function remove(Matient $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return Matient[] Returns an array of Matient objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('m.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Matient
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
