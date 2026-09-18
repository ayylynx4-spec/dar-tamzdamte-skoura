export type Occupancy = 1 | 2 | 3;

export function getRoomPriceCents(basePriceCents: number, occupancy: Occupancy): number {
  switch (occupancy) {
    case 1:
      return Math.round(basePriceCents * 0.8);
    case 2:
      return basePriceCents;
    case 3:
      return Math.round(basePriceCents * 1.2);
    default:
      throw new Error("Invalid room occupancy");
  }
}

export function calculateDinnerPriceCents(
  items: Array<{ priceCents: number; quantity: number }>
): number {
  return items.reduce((total, item) => {
    if (!Number.isInteger(item.quantity) || item.quantity < 1) {
      throw new Error("Dinner quantity must be at least 1");
    }

    return total + item.priceCents * item.quantity;
  }, 0);
}

export function calculateExperiencePriceCents(
  priceCentsPerPerson: number,
  guests: number
): number {
  if (!Number.isInteger(guests) || guests < 1) {
    throw new Error("Experience guests must be at least 1");
  }

  return priceCentsPerPerson * guests;
}

export function getNights(arrival: string, departure: string): number {
  const start = new Date(arrival);
  const end = new Date(departure);

  return Math.max(0, Math.round((end.getTime() - start.getTime()) / 86400000));
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
