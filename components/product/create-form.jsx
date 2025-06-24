'use client';

import { Separator } from '../ui/separator';
import { ChevronRightIcon } from 'lucide-react';
import FormStepItem from './form-step-item';
import { Fragment, useState } from 'react';
import BasicForm from './basic-form';
import ContentForm from './content-form';
import ExtrasForm from './extras-form';
import PricingForm from './pricing-form';

export default function CreateForm({
  categories,
  owners,
  licenses,
}) {
  const [formSteps, setFormSteps] = useState([
    {
      label: 'Basic',
      status: 'active',
    },
    {
      label: 'Content',
      status: 'nonactive',
    },
    {
      label: 'Extras',
      status: 'nonactive',
    },
    {
      label: 'Pricing',
      status: 'nonactive',
    },
  ]);

  const handleNextStep = () => {
    let activeIndex;
    setFormSteps(formSteps.map((step, index) => {
      if (step.status === 'active') {
        activeIndex = index;
        return {
          ...step,
          status: 'complete',
        };
      }

      if (index === activeIndex + 1) {
        return {
          ...step,
          status: 'active',
        };
      }

      return step;
    }));
  };

  const handlePrevStep = () => {
    let prevActiveIndex;
    setFormSteps(formSteps.map((step, index) => {
      if (formSteps[index + 1]?.status === 'active') {
        prevActiveIndex = index + 1;
        return {
          ...step,
          status: 'active',
        };
      }

      if (index === prevActiveIndex) {
        return {
          ...step,
          status: 'nonactive',
        };
      }

      return step;
    }));
  };

  const handleResetStep = () => {
    setFormSteps(formSteps.map(step => {
      if (step.label === 'Basic') {
        return {
          ...step,
          status: 'active',
        };
      }
      return {
        ...step,
        status: 'nonactive',
      };
    }));
  };

  return (
    <>
      <div className="flex gap-4 mb-5 lg:max-w-2/3 font-medium text-zinc-700/90 dark:text-zinc-200 items-center">
        {formSteps.map((step, index) => (
          <Fragment key={step.label}>
            <FormStepItem stepNumber={index + 1} status={step.status} label={step.label} />
            {index < 3 &&
              <ChevronRightIcon
                className={`size-4 text-zinc-700/60 dark:text-zinc-500 ${step.status === 'nonactive' ? 'opacity-50' : ''}`}
              />}
          </Fragment>
        ))}
      </div>

      <Separator className="lg:max-w-2/3 mb-7" />

      {formSteps.map(step => {
        if (step.status === 'active') {
          switch (step.label) {
            case 'Basic':
              return <BasicForm
                key={step.label}
                onNextStep={handleNextStep}
                categories={categories}
                owners={owners}
                licenses={licenses}
              />;
            case 'Content':
              return <ContentForm key={step.label} onNextStep={handleNextStep} onPrevStep={handlePrevStep} />;
            case 'Extras':
              return <ExtrasForm key={step.label} onNextStep={handleNextStep} onPrevStep={handlePrevStep} />;
            case 'Pricing':
              return <PricingForm key={step.label} onPrevStep={handlePrevStep} onResetStep={handleResetStep} />;
          }
        }
        return null;
      })}
    </>
  );
}
