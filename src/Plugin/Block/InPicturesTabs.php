<?php

namespace Drupal\uber_publisher_in_pictures\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides 'In Pictures Tabs' block.
 *
 * @Block(
 *   id = "in_pictures_tabs",
 *   admin_label = @Translation("In Pictures Tabs"),
 *   category = @Translation("In Pictures")
 * )
 */
class InPicturesTabs extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#theme' => 'in_pictures_tabs',
      '#title' => "In pictures tabs",
    ];
  }

}
