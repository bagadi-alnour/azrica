<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the public 'vich_uploader.namer_directory_current_date_time' shared service.

include_once $this->targetDirs[3].'/vendor/vich/uploader-bundle/Naming/DirectoryNamerInterface.php';
include_once $this->targetDirs[3].'/vendor/vich/uploader-bundle/Naming/ConfigurableInterface.php';
include_once $this->targetDirs[3].'/vendor/vich/uploader-bundle/Naming/CurrentDateTimeDirectoryNamer.php';
include_once $this->targetDirs[3].'/vendor/vich/uploader-bundle/Naming/DateTimeHelper.php';
include_once $this->targetDirs[3].'/vendor/vich/uploader-bundle/Naming/CurrentDateTimeHelper.php';

return $this->services['vich_uploader.namer_directory_current_date_time'] = new \Vich\UploaderBundle\Naming\CurrentDateTimeDirectoryNamer(new \Vich\UploaderBundle\Naming\CurrentDateTimeHelper(), ($this->privates['property_accessor'] ?? $this->load('getPropertyAccessorService.php')));
