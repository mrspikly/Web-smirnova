const roomCardSelector = ".room-card";
const roomCardAvailableClass = "room-card--available";
const roomCardInactiveClass = "room-card--inactive";
const roomCardPendingClass = "room-card--pending";
const roomCardActionSelector = ".room-card__action";

function setupRoomCards() {
  const roomCards = Array.from(document.querySelectorAll(roomCardSelector));

  roomCards.forEach((card) => {
    const actionButton = card.querySelector(roomCardActionSelector);

    if (actionButton) {
      actionButton.addEventListener("click", (event) => {
        if (!card.classList.contains(roomCardAvailableClass)) {
          return;
        }

        event.stopPropagation();

        if (card.classList.contains(roomCardPendingClass)) {
          return;
        }

        card.classList.add(roomCardPendingClass);
      });
    }

    card.addEventListener("mouseleave", () => {
      if (
        card.classList.contains(roomCardAvailableClass) &&
        card.classList.contains(roomCardPendingClass)
      ) {
        card.classList.remove(roomCardPendingClass, roomCardAvailableClass);
        card.classList.add(roomCardInactiveClass);
      }
    });

    card.addEventListener("click", () => {
      if (card.classList.contains(roomCardInactiveClass)) {
        card.classList.remove(roomCardInactiveClass);
        card.classList.add(roomCardAvailableClass);
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupRoomCards);
} else {
  setupRoomCards();
}