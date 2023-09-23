import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
    'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'
  ];
 ngOnInit() {
  // Set the carousel to auto-play every 5 seconds
  this.runCarousel();
}

runCarousel() {
  const interval = 100; // 5 seconds interval (adjust as needed)

  // Trigger carousel slide every 'interval' milliseconds
  setInterval(() => {
    document.querySelector('#carouselExample')?.classList.add('next');
    setTimeout(() => {
      document.querySelector('#carouselExample')?.classList.remove('next');
    }, 700); // The duration of the slide transition (adjust as needed)
  }, interval);
}

companies = [
  { name: 'Chevron', logo: 'chevron-logo.png' },
  { name: 'Exxon Mobil', logo: 'exxon-logo.png' },
  { name: 'Occidental Petroleum', logo: 'occidental-logo.png' },
  { name: 'BNY Mellon', logo: 'bny-mellon-logo.png' },
  { name: 'Morgan Stanley', logo: 'morgan-stanley-logo.png' },
  { name: 'AbbVie', logo: 'abbvie-logo.png' },
  { name: 'ConocoPhillips', logo: 'conoco-phillips-logo.png' },
  { name: '3M Company', logo: '3m-logo.png' },
  { name: 'Eli Lilly and Company', logo: 'eli-lilly-logo.png' },
  { name: 'Florida Power and Light', logo: 'fpl-logo.png' },
  { name: 'Goldman Sachs', logo: 'goldman-sachs-logo.png' },
  { name: 'Adobe', logo: 'adobe-logo.png' },
  { name: 'Con Edison', logo: 'con-edison-logo.png' },
  { name: 'PayPal', logo: 'paypal-logo.png' },
  { name: 'Dominion Energy', logo: 'dominion-energy-logo.png' },
  { name: 'Valero Energy', logo: 'valero-logo.png' },
  { name: 'Microsoft', logo: 'microsoft-logo.png' },
  { name: 'Devon Energy', logo: 'devon-energy-logo.png' },
  { name: 'Netflix', logo: 'netflix-logo.png' },
  { name: 'Apple', logo: 'apple-logo.png' }
  // Add more companies with names and logo file paths here
];
initialDisplayCount = 4;
showMore = false;

toggleShowMore() {
  this.showMore = !this.showMore;
}
industries = [
  { name: 'Architecture and Engineering', logo: 'architecture-engineering.png' },
  { name: 'Arts, Entertainment, Sports, and Media', logo: 'arts-entertainment.png' },
  { name: 'Building and Grounds Maintenance', logo: 'building-maintenance.png' },
  { name: 'Business and Financial', logo: 'business-financial.png' },
  { name: 'Community and Social Services', logo: 'community-social-services.png' },
  { name: 'Computer and Mathematical', logo: 'computer-mathematical.png' },
  { name: 'Construction and Extraction', logo: 'construction-extraction.png' },
  { name: 'Education, Training, and Library', logo: 'education-library.png' },
  { name: 'Executive Management', logo: 'executive-management.png' },
  { name: 'Farming, Fishing, and Forestry', logo: 'farming-forestry.png' },
  { name: 'Food Preparation and Restaurant', logo: 'food-preparation.png' },
  { name: 'Healthcare Practitioner and Technical', logo: 'healthcare-technical.png' },
  { name: 'Healthcare Support', logo: 'healthcare-support.png' },
  { name: 'Installation, Maintenance and Repair', logo: 'maintenance-repair.png' },
  { name: 'Legal', logo: 'legal.png' },
  { name: 'Life, Physical, and Social Science', logo: 'life-science.png' },
];
}
