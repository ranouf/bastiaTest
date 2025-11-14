import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Dossier {
  modeLabel: string;
  modeClasses: string;
  address: string;
  client: string;
  value: string;
  typeLabel: string;
  nextStep: string;
  emissionDate: string;
  dueDate: string;
  statusLabel: string;
  statusClasses: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Bastia Dossiers';

  showNewDossierDialog = false;

  private previousBodyOverflow = '';

  dossiers: Dossier[] = [
    {
      modeLabel: 'Manuel',
      modeClasses: 'bg-[#140500] text-white',
      address: '2131 Lacordaire, Montréal A1B 2C3',
      client: 'ABF inc',
      value: '200.00 $',
      typeLabel: 'Construction',
      nextStep: 'Mise en demeure',
      emissionDate: '22/01/25',
      dueDate: '22/01/25',
      statusLabel: 'Programmé',
      statusClasses: 'bg-green-50 text-green-700'
    },
    {
      modeLabel: 'Automatique',
      modeClasses: 'bg-slate-100 text-[#140500]',
      address: '2131 Lacordaire, Montréal A1B 2C3',
      client: 'ABF inc',
      value: '200.00 $',
      typeLabel: 'Taxes',
      nextStep: 'Mise en demeure',
      emissionDate: '22/01/25',
      dueDate: '22/01/25',
      statusLabel: 'Soumis',
      statusClasses: 'bg-green-50 text-green-700'
    },
    {
      modeLabel: 'Manuel',
      modeClasses: 'bg-[#140500] text-white',
      address: '2131 Lacordaire, Montréal A1B 2C3',
      client: 'ABF inc',
      value: '200.00 $',
      typeLabel: 'Copropriétée',
      nextStep: 'Mise en demeure',
      emissionDate: '22/01/25',
      dueDate: '22/01/25',
      statusLabel: 'Programmé',
      statusClasses: 'bg-green-50 text-green-700'
    },
    {
      modeLabel: 'Non-séléctionné',
      modeClasses: 'bg-white border border-slate-300 text-[#140500]',
      address: '2131 Lacordaire, Montréal A1B 2C3',
      client: 'ABF inc',
      value: '200.00 $',
      typeLabel: 'Jugement',
      nextStep: 'Mise en demeure',
      emissionDate: '22/01/25',
      dueDate: '22/01/25',
      statusLabel: 'Programmé',
      statusClasses: 'bg-green-50 text-green-700'
    },
    {
      modeLabel: 'Automatique',
      modeClasses: 'bg-slate-100 text-[#140500]',
      address: '2131 Lacordaire, Montréal A1B 2C3',
      client: 'ABF inc',
      value: '200.00 $',
      typeLabel: 'Construction',
      nextStep: 'Mise en demeure',
      emissionDate: '22/01/25',
      dueDate: '22/01/25',
      statusLabel: 'Urgent',
      statusClasses: 'bg-red-500 text-red-50'
    },
    {
      modeLabel: 'Manuel',
      modeClasses: 'bg-[#140500] text-white',
      address: '2131 Lacordaire, Montréal A1B 2C3',
      client: 'ABF inc',
      value: '200.00 $',
      typeLabel: 'Jugement',
      nextStep: 'Mise en demeure',
      emissionDate: '22/01/25',
      dueDate: '22/01/25',
      statusLabel: 'Annulé',
      statusClasses: 'bg-red-50 text-red-700'
    },
    {
      modeLabel: 'Non-séléctionné',
      modeClasses: 'bg-white border border-slate-300 text-[#140500]',
      address: '2131 Lacordaire, Montréal A1B 2C3',
      client: 'ABF inc',
      value: '200.00 $',
      typeLabel: 'Copropriétée',
      nextStep: 'Mise en demeure',
      emissionDate: '22/01/25',
      dueDate: '22/01/25',
      statusLabel: 'Programmé',
      statusClasses: 'bg-green-50 text-green-700'
    },
    {
      modeLabel: 'Automatique',
      modeClasses: 'bg-slate-100 text-[#140500]',
      address: '2131 Lacordaire, Montréal A1B 2C3',
      client: 'ABF inc',
      value: '200.00 $',
      typeLabel: 'Construction',
      nextStep: 'Mise en demeure',
      emissionDate: '22/01/25',
      dueDate: '22/01/25',
      statusLabel: 'Urgent',
      statusClasses: 'bg-red-500 text-red-50'
    },
    {
      modeLabel: 'Automatique',
      modeClasses: 'bg-slate-100 text-[#140500]',
      address: '2131 Lacordaire, Montréal A1B 2C3',
      client: 'ABF inc',
      value: '200.00 $',
      typeLabel: 'Taxes',
      nextStep: 'Mise en demeure',
      emissionDate: '22/01/25',
      dueDate: '22/01/25',
      statusLabel: 'Annulé',
      statusClasses: 'bg-red-50 text-red-700'
    },
    {
      modeLabel: 'Manuel',
      modeClasses: 'bg-[#140500] text-white',
      address: '2131 Lacordaire, Montréal A1B 2C3',
      client: 'ABF inc',
      value: '200.00 $',
      typeLabel: 'Construction',
      nextStep: 'Mise en demeure',
      emissionDate: '22/01/25',
      dueDate: '22/01/25',
      statusLabel: 'Soumis',
      statusClasses: 'bg-green-50 text-green-700'
    }
  ];

  pagination = ['1', '2', '3', '...', '8'];

  openNewDossierDialog(): void {
    this.showNewDossierDialog = true;
    this.toggleBodyScroll(true);
  }

  closeNewDossierDialog(): void {
    this.showNewDossierDialog = false;
    this.toggleBodyScroll(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.showNewDossierDialog) {
      this.closeNewDossierDialog();
    }
  }

  ngOnDestroy(): void {
    this.toggleBodyScroll(false);
  }

  private toggleBodyScroll(lock: boolean): void {
    if (typeof document === 'undefined') {
      return;
    }

    if (lock) {
      this.previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = this.previousBodyOverflow;
    }
  }
}
